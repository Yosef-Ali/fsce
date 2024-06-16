import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UploadButton from "../upload-button";

interface ImageUploaderProps {
  control: any;
  onImageId: (imageId: string | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ control, onImageId }) => {
  return (
    <div className="flex w-full items-center space-x-2 mb-4">
      <FormField
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Image URL</FormLabel>
            <div className="flex items-center space-x-2">
              <FormControl>
                <Input placeholder="Add image URL here" {...field} />
              </FormControl>
              <UploadButton onImageId={onImageId} />
            </div>
            <FormDescription className="text-sm">This is your public image URL.</FormDescription>
            <FormMessage className="text-sm" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ImageUploader;