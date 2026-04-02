'use server';

// -------------------------------------------------------
// Stub action — replace with real DB + PDF logic
// -------------------------------------------------------

export async function checkBookExists(_title: string) {
    return { exists: false, book: null };
}

export async function createBook(data: {
    clerkId: string;
    title: string;
    author: string;
    persona?: string;
    fileURL: string;
    fileBlobKey: string;
    coverURL?: string;
    fileSize: number;
}) {
    console.log('[stub] createBook called with', data);
    return { success: true, alreadyExists: false, data: { _id: 'stub', slug: 'stub' } };
}

export async function saveBookSegments(
    _bookId: string,
    _userId: string,
    _content: unknown[]
) {
    return { success: true };
}
