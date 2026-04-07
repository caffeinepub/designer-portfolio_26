import { useMutation } from "@tanstack/react-query";

export function useGetProjects() {
  return { data: [], isLoading: false, isError: false };
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
    }) => {
      // Contact form submission — no backend method available yet
      console.log("Contact form submitted:", data);
      return { success: true };
    },
  });
}
