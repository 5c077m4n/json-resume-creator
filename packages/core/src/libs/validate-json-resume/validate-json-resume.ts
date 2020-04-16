import { Validator } from 'jsonschema';

import { definitions as schemas } from '../../schemas/resume.schema.json';

const resumeValidator = new Validator();
export async function validateJsonResume(json: unknown): Promise<boolean> {
	const { Resume } = schemas;
	const res = resumeValidator.validate(json, Resume);
	return res.valid;
}
