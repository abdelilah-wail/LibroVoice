'use client';

import React, { useRef, useState } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { LucideIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploaderProps<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    acceptTypes: string[];
    icon: LucideIcon;
    placeholder: string;
    hint: string;
    disabled?: boolean;
}

const FileUploader = <T extends FieldValues>({
    control,
    name,
    label,
    acceptTypes,
    icon: Icon,
    placeholder,
    hint,
    disabled,
}: FileUploaderProps<T>) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
                const hasFile = typeof value === 'object' && value !== null && 'name' in value && 'size' in value;

                const handleFile = (file: File | null) => {
                    if (!file) return;
                    onChange(file);
                };

                const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (disabled) return;
                    const file = e.dataTransfer.files?.[0];
                    if (file) handleFile(file);
                };

                return (
                    <div className="space-y-2">
                        {/* Label */}
                        <label className="form-label">{label}</label>

                        {/* Drop zone */}
                        <div
                            className={cn(
                                'upload-dropzone border-2 border-dashed border-[var(--border-medium)] rounded-lg transition-all',
                                hasFile && 'upload-dropzone-uploaded',
                                isDragging && 'border-[var(--accent-warm)] bg-[var(--accent-light)]',
                                disabled && 'opacity-60 cursor-not-allowed'
                            )}
                            onClick={() => !disabled && inputRef.current?.click()}
                            onDragOver={(e) => {
                                e.preventDefault();
                                if (!disabled) setIsDragging(true);
                            }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={handleDrop}
                        >
                            {hasFile ? (
                                /* Uploaded state */
                                <div className="flex items-center gap-3 px-4">
                                    <Icon className="upload-dropzone-icon shrink-0" />
                                    <span className="upload-dropzone-text flex-1 text-left truncate max-w-[260px]">
                                        {(value as File).name}
                                    </span>
                                    <button
                                        type="button"
                                        className="upload-dropzone-remove ml-auto shrink-0"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onChange(undefined);
                                            if (inputRef.current) inputRef.current.value = '';
                                        }}
                                        aria-label="Remove file"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                /* Empty state */
                                <div className="file-upload-shadow">
                                    <Icon className="upload-dropzone-icon" />
                                    <p className="upload-dropzone-text">{placeholder}</p>
                                    <p className="upload-dropzone-hint">{hint}</p>
                                </div>
                            )}

                            <input
                                ref={inputRef}
                                type="file"
                                accept={acceptTypes.join(',')}
                                className="hidden"
                                disabled={disabled}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFile(file);
                                }}
                            />
                        </div>

                        {/* Validation error */}
                        {error && (
                            <p className="text-sm font-medium text-destructive">
                                {error.message}
                            </p>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default FileUploader;
