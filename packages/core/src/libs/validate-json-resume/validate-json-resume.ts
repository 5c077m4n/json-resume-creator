import { Validator } from 'jsonschema';

import resumeSchema from '../../schemas/resume.schema.json';

const resumeValidator = new Validator();
export async function validateJsonResume(json: unknown): Promise<boolean> {
	const {
		definitions: { Resume },
	} = resumeSchema;
	const res = resumeValidator.validate(json, Resume);
	return res.valid;
}
