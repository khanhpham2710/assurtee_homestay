interface BoundingPoly {
    vertices: {
        x: number;
        y: number;
    }[];
}

interface TextResult {
    text: string;
    keyText?: string;
    confidenceScore?: number;
    boundingPolys?: BoundingPoly[];
}

interface BizLicenseResult {
    birth?: TextResult[];
    bisAddress?: TextResult[];
    registerNumber?: TextResult[];
    companyName?: TextResult[];
    corpName?: TextResult[];
}

export interface ImageData {
    images?: {
        uid?: string;
        name?: string;
        inferResult?: string;
        message?: string;
        validationResult?: {
            result?: string;
        };
        bizLicense?: {
            meta?: {
                estimatedLanguage?: string;
            };
            result?: BizLicenseResult;
        };
    }[];
}

export interface PostImageFailed {
    code?: string;
    message: string;
    path?: string;
    traceId?: string;
    timestamp: Date;
}
