const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

const config = require('./config.json').WATSON

const assistant = new AssistantV2({
	authenticator: new IamAuthenticator({
		apikey: config.API_KEY,
	}),
	serviceUrl: config.SERVICE_URL,
	version: config.VERSION,
	workspaceId: config.WORKSPACE_ID,
})

exports.newSession = () =>
	new Promise((resolve, reject) => {
		assistant.createSession(
			{
				assistantId: config.ASSISTANT_ID,
			},
			function (err, response) {
				if (err) {
					reject(err)
				} else {
					resolve(response)
				}
			}
		)
	})

exports.deleteSession = (sessionId) =>
	new Promise((resolve, reject) => {
		assistant.deleteSession(
			{
				assistantId: config.ASSISTANT_ID,
				sessionId: sessionId,
			},
			function (err, response) {
				if (err) {
					reject(err)
				} else {
					resolve(response)
				}
			}
		)
	})

exports.getMessage = (input, sessionId) =>
	new Promise((resolve, reject) => {
		assistant.message(
			{
				assistantId: config.ASSISTANT_ID,
				sessionId: sessionId,
				input: { text: input },
			},
			function (err, response) {
				if (err) {
					reject(err)
				} else {
					resolve(response)
				}
			}
		)
	})
