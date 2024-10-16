import { useToast } from "@/components/ui/use-toast"

export function useCustomToast() {
  const { toast } = useToast()

  const showToast = (title: string, description?: string) => {
    toast({
      title,
      description,
      duration: 3000,
    })
  }

  return { showToast }
}