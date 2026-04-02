'use client';

import React from 'react';

const steps = [
    'Parsing your PDF…',
    'Uploading files to cloud…',
    'Creating your book profile…',
    'Saving content segments…',
    'Almost done…',
];

const LoadingOverlay = () => {
    return (
        <div className="loading-wrapper" role="status" aria-live="polite">
            <div className="loading-shadow-wrapper bg-white shadow-[var(--shadow-soft-lg)]">
                <div className="loading-shadow">
                    {/* Spinner */}
                    <svg
                        className="loading-animation w-14 h-14 text-[#663820]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>

                    <h2 className="loading-title" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                        Synthesising your book…
                    </h2>

                    <div className="loading-progress">
                        {steps.map((step) => (
                            <div key={step} className="loading-progress-item">
                                <span className="loading-progress-status" />
                                <span className="text-[var(--text-secondary)]">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
