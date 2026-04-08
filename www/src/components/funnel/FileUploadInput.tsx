'use client';

import * as React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FileUploadInputProps {
  name: string;
  label?: string;
  accept?: string;
  maxSize?: number;
  required?: boolean;
}

const FileUploadInput: React.FC<FileUploadInputProps> = ({
  name,
  label = 'Upload CV',
  accept = '.pdf,.doc,.docx',
  maxSize = 5 * 1024 * 1024, // 5MB
  required = false,
}) => {
  const { control, formState: { errors } } = useFormContext();
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = async (file: File) => {
    if (file.size > maxSize) {
      alert('Bestand is te groot (max 5MB)');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return false;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(file.type)) {
      alert('Alleen PDF en Word documenten zijn toegestaan');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return false;
    }

    setIsUploading(true);
    setFileName(file.name);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 90) {
        clearInterval(interval);
      }
      setUploadProgress(Math.min(progress, 90));
    }, 200);

    // File will be uploaded via Server Action getUploadUrl
    // For now, complete the progress after a delay
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setIsUploading(false);
    }, 1500);

    return true;
  };

  const getErrorMessage = () => {
    const error = errors[name];
    if (error?.message) {
      return error.message as string;
    }
    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={
        required
          ? { required: 'Dit veld is verplicht' }
          : undefined
      }
      render={({ field }) => (
        <div className="space-y-2">
          {label && (
            <label className="block text-sm font-medium text-text-primary">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}

          <div className="relative">
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleFileChange(file);
                  field.onChange(file);
                }
              }}
              disabled={isUploading}
              className={cn(
                'block w-full px-4 py-2 border-2 rounded-lg bg-bg-secondary text-text-primary',
                'focus:outline-none focus:ring-2 focus:ring-accent-magenta',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition-all duration-200',
                getErrorMessage()
                  ? 'border-red-500'
                  : 'border-accent-purple hover:border-accent-magenta'
              )}
              aria-label={label}
            />

            {fileName && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-secondary truncate max-w-[200px]">
                {fileName}
              </div>
            )}
          </div>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                className="bg-gradient-primary h-2"
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {uploadProgress === 100 && !isUploading && fileName && (
            <p className="text-xs text-green-400">Bestand succesvol geüpload</p>
          )}

          {getErrorMessage() && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage()}</p>
          )}
        </div>
      )}
    />
  );
};

// Add motion import at the top
import { motion } from 'framer-motion';

export { FileUploadInput };
