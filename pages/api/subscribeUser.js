export default async (req, res) => {
    const { email, name } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'L\'e-mail est obligatoire' });
    }

    try {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const DATACENTER = process.env.MAILCHIMP_API_SERVER;
        let data = {};
        if (!name) {
            data = {
                email_address: email,
                status: 'subscribed',
            };
        } else {
            data = {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: name,
                }
            };
        }


        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

            {
                body: JSON.stringify(data),
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }
        );

        if (response.status >= 400) {
            return res.status(400).json({
                error: `Une erreur s'est produite lors de l'inscription à la newsletter.
        Contactez-moi à l'adresse contact@independence-dev.com et je vous ajouterai à l'ancienne :(.`,
            });
        }

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};