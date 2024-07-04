import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PostStatus = "draft" | "published" | "archived";

interface PostStatusSelectProps {
  initialStatus: PostStatus;
  onStatusChange: (newStatus: PostStatus) => void;
}

export const PostStatusSelect = ({ initialStatus, onStatusChange }: PostStatusSelectProps) => {
  const [status, setStatus] = useState<PostStatus>(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const handleStatusChange = (newStatus: PostStatus) => {
    setStatus(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <div className="grid gap-3">
      <Label htmlFor="status">Status</Label>
      <Select value={status} onValueChange={handleStatusChange}>
        <SelectTrigger id="status" aria-label="Select status">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};