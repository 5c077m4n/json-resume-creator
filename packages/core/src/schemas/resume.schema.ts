import type { Schema } from 'jsonschema';

export const resumeSchema: Schema = {
	id: '/JsonResume',
	type: 'object',
	properties: {
		basics: {
			type: 'object',
			properties: {
				name: { type: 'string' },
				label: { type: 'string' },
				picture: { type: 'string' },
				email: { type: 'string' },
				phone: { type: 'string' },
				website: { type: 'string' },
				summary: { type: 'string' },
				location: {
					type: 'object',
					properties: {
						address: { type: 'string' },
						postalCode: { type: 'string' },
						city: { type: 'string' },
						countryCode: { type: 'string' },
						region: { type: 'string' },
					},
				},
				profiles: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							network: { type: 'string' },
							username: { type: 'string' },
							url: { type: 'string' },
						},
					},
				},
			},
		},
		work: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					company: { type: 'string' },
					position: { type: 'string' },
					website: { type: 'string' },
					startDate: { type: 'string' },
					endDate: { type: 'string' },
					summary: { type: 'string' },
					highlights: { type: 'array', items: { type: 'string' } },
				},
			},
		},
		volunteer: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					organization: { type: 'string' },
					position: { type: 'string' },
					website: { type: 'string' },
					startDate: { type: 'string' },
					endDate: { type: 'string' },
					summary: { type: 'string' },
					highlights: { type: 'array', items: { type: 'string' } },
				},
			},
		},
		education: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					institution: { type: 'string' },
					area: { type: 'string' },
					studyType: { type: 'string' },
					startDate: { type: 'string' },
					endDate: { type: 'string' },
					gpa: { type: 'string' },
					courses: { type: 'array', items: { type: 'string' } },
				},
			},
		},
		awards: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					title: { type: 'string' },
					date: { type: 'string' },
					awarder: { type: 'string' },
					summary: { type: 'string' },
				},
			},
		},
		publications: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					publisher: { type: 'string' },
					releaseDate: { type: 'string' },
					website: { type: 'string' },
					summary: { type: 'string' },
				},
			},
		},
		skills: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					level: { type: 'string' },
					keywords: { type: 'array', items: { type: 'string' } },
				},
			},
		},
		languages: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					language: { type: 'string' },
					fluency: { type: 'string' },
				},
			},
		},
		interests: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					keywords: { type: 'array', items: { type: 'string' } },
				},
			},
		},
		references: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					reference: { type: 'string' },
				},
			},
		},
	},
};
