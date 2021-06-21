import admin from 'firebase-admin'
import functions from 'firebase-functions'

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "apinode-39bf2",
        "private_key_id": "468aa2787ad2aecde8d11b4585a9f4b9e7b3723f",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC9Tn0Kva44S/kt\nlS/or4IR8m83TQrair3IzIrHq4VdtpAlqpnSfa3Vfdx4RAKdoG4JZnN10XRRuBVs\nVO5tfrKCQJLPDmVEEQFGOoYFQe1EErsCPpfElfLKKNc32IChZVSRocOMU7G0eaW3\nuYv+phNGfQoGXaNdMSFmqpYdBTQjEXxnsDJAqzR6okyGLwj7YApSKzUykloeJ1pP\nk9+9CO9lwxBbC9v/4TEmdr/bYaRTFbO6X8h1wTDgFT9/RDgRxnkEmjy9yJe21OrJ\nuX8cCorlzE0rP2Y/7ksxgfhYXWcR1M2BcPXkhP+2FOyK8Q6OKQ4CcQ4LBzPfhber\ncpvLitCTAgMBAAECggEAHJ4m7QlrsvsD5PjZUJW9ALWOS+U2WioAiBXTzQeIQSMo\n0L46RBstEknVRcu85tNVOc/mbc3c2xW3DLTHg9Spa7i9+NXg8n9CRWRHf7f4Wa1z\nM+L+fSt7PpsZ80lOzhdMHOVAHeXxHAAKe1HDcMWZGF4tYR+lY0swFMh+VPjFFEp8\ngt3reZkoPJ4M972DxtGY85vvEG7X/B4RrMeSSRgtTeLTctaDDtfKiADKbeZ/54n7\nsPNN0d9s3kvgLDtRMenyXZYm+JIANbjIfmH31iAZwflmDSlOBBFTNuUyMJyu9Ji4\nralo8pePpAzdAI/aoz+ynsWvJLQEm72ie4AoOi42QQKBgQD+IpWvfjY4L+jhHW91\nCmYfI7TQyM+xu4TO4X9XLmHnJkbTMRwX13KCRv8EWIJokkL/skaD/J3AuI63BK/f\nnSmgPpUQmbRLV/DOtZp0sP8fJpXFdLDw/JNH004k4pzQTRFvLrBiqk2qt87tRLqS\nSw4aTyWHR9BgkGrp5uG3Ki2QQwKBgQC+sh4elXrhlGk1GZ2RhWE2pzaRkiz3uNV8\n+PGSK2ZaudK3A5vttQvAXOjuuXApzWsbYezjzaK9D02oMI3U4jqDCHdD18aw4ETz\nSoKNJWZ7a8GUg9d3lnAQpM1sDjMe25RBi6GWI3tEOZIO+3aJRiDhlVkNHh8sncnD\n+J/jEjyhcQKBgC9hzVzCAGPrctT+AvjkbnPh2WWP+0Fc//7+hhqAGFrbhRr9Lgq3\n7a6ihAuQYQgUNQ+tcn5LTDJRdrJi2lOr3sX0xSAqODZP+CLiMyEMmxR4wjXlctQL\nk34xxIEWCzy/EcAUCWjr7b0lthwA03RRMBjxpsKZPh2y72wa0vyujX43AoGABaRZ\ndcgwaYotjq+iVNLgbHCIEciEYhPq5Rasdwmnrpl+3YFS1LadkWRuU9nSsrnsKFQ+\nYQMNhJB2WLqPB7RlzMisVqqEq2kHQTd8I1bu8Eng4VcBQf2GdUea+E53Prt6aHIM\nJtgH5p3Zb24LNMaJZIM5rkSs4XINrSmm+V3pw1ECgYB+4enhBzDL8zxp6i0EDHI1\nvJAlVhjQio7ES9seYVvS/wgB+8FuftE2DtNc451W7nfxYY7ipKf1TxqH7xx2oyW5\nBgRhQPMp051dBh9+jjXRnB2maJdGuSygwl3jW25wVlLO15uxqzG5h+OmLXH3Uqtb\nV0h5hNBcDh7qVsWE6TYz3A==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-g7d2k@apinode-39bf2.iam.gserviceaccount.com",
        "client_id": "111393123125431915839",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-g7d2k%40apinode-39bf2.iam.gserviceaccount.com"
    }),
    databaseURL: 'https://apinode-39bf2-default-rtdb.firebaseio.com',
})

const db = admin.database()

export { db }