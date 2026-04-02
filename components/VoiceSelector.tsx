'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { voiceOptions, voiceCategories } from '@/lib/constants';
import { VoiceSelectorProps } from '@/types';

const VoiceSelector = ({ value, onChange, disabled, className }: VoiceSelectorProps) => {
    const groups = [
        { label: 'Male Voices', keys: voiceCategories.male },
        { label: 'Female Voices', keys: voiceCategories.female },
    ];

    return (
        <div className={cn('space-y-5', className)}>
            {groups.map((group) => (
                <div key={group.label}>
                    <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
                        {group.label}
                    </p>
                    <div className="voice-selector-options flex-wrap">
                        {group.keys.map((key) => {
                            const voice = voiceOptions[key as keyof typeof voiceOptions];
                            const isSelected = value === voice.id;

                            return (
                                <label
                                    key={key}
                                    className={cn(
                                        'voice-selector-option cursor-pointer select-none',
                                        isSelected
                                            ? 'voice-selector-option-selected'
                                            : 'voice-selector-option-default',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                    htmlFor={`voice-${key}`}
                                >
                                    <input
                                        type="radio"
                                        id={`voice-${key}`}
                                        name="voice"
                                        value={voice.id}
                                        checked={isSelected}
                                        disabled={disabled}
                                        onChange={() => onChange(voice.id)}
                                        className="sr-only"
                                    />
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold text-[var(--text-primary)] text-base leading-tight">
                                            {voice.name}
                                        </span>
                                        <span className="text-xs text-[var(--text-secondary)] leading-snug">
                                            {voice.description}
                                        </span>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VoiceSelector;
