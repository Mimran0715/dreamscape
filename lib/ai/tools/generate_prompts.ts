/* imports */
import { z } from 'zod';
import { tool } from 'ai';


/* interface of some kind */

/* export const */

export const generatePrompts = tool ({
    description: "generate creative writing prompts", 
    parameters: z.object({
        topic: z.string().max(20)
    }), 
    execute: async ({topic}) => {
        const prompt = "this is a sample prompt for testing";
        return prompt;
    },
});

