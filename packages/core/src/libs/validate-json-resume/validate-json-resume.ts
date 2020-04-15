import { Validator } from 'jsonschema';

import resumeSchema from '../../schemas/resume.schema.json';

const resumeValidator = new Validator();
export async function validateJsonResume(json: unknown): Promise<boolean> {
	const res = resumeValidator.validate(json, resumeSchema);
	return res.valid;
}
