import List "mo:core/List";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  public type Project = {
    title : Text;
    description : Text;
    tags : [Text];
    coverUrl : Text;
    link : Text;
    order : Nat;
  };

  module Project {
    public func compareByOrder(project1 : Project, project2 : Project) : Order.Order {
      Nat.compare(project1.order, project2.order);
    };
  };

  public type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let projects = Map.empty<Text, Project>();
  let contactSubmissions = List.empty<ContactSubmission>();
  var admin : ?Principal = null;

  public shared ({ caller }) func initialize() : async () {
    switch (admin) {
      case (null) { admin := ?caller };
      case (?_) { Runtime.trap("Already initialized") };
    };
  };

  func assertAdmin(caller : Principal) {
    switch (admin) {
      case (?adminPrincipal) {
        if (caller != adminPrincipal) {
          Runtime.trap("Not authorized");
        };
      };
      case (null) { Runtime.trap("Not initialized") };
    };
  };

  // Project CRUD
  public query ({ caller }) func getProjects() : async [Project] {
    projects.values().toArray().sort(Project.compareByOrder);
  };

  public shared ({ caller }) func addProject(title : Text, description : Text, tags : [Text], coverUrl : Text, link : Text, order : Nat) : async () {
    assertAdmin(caller);
    let project : Project = {
      title;
      description;
      tags;
      coverUrl;
      link;
      order;
    };
    projects.add(title, project);
  };

  public shared ({ caller }) func updateProject(title : Text, description : Text, tags : [Text], coverUrl : Text, link : Text, order : Nat) : async () {
    assertAdmin(caller);
    switch (projects.get(title)) {
      case (null) { Runtime.trap("Project does not exist") };
      case (?_) {
        let project : Project = {
          title;
          description;
          tags;
          coverUrl;
          link;
          order;
        };
        projects.add(title, project);
      };
    };
  };

  public shared ({ caller }) func deleteProject(title : Text) : async () {
    assertAdmin(caller);
    if (not projects.containsKey(title)) {
      Runtime.trap("Project does not exist");
    };
    projects.remove(title);
  };

  // Contact Submissions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    let submissions = contactSubmissions.toArray();
    submissions.reverse();
  };
};
