import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Project {
    title: string;
    order: bigint;
    link: string;
    tags: Array<string>;
    description: string;
    coverUrl: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    addProject(title: string, description: string, tags: Array<string>, coverUrl: string, link: string, order: bigint): Promise<void>;
    deleteProject(title: string): Promise<void>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getProjects(): Promise<Array<Project>>;
    initialize(): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updateProject(title: string, description: string, tags: Array<string>, coverUrl: string, link: string, order: bigint): Promise<void>;
}
