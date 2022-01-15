module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07692576e554e6a2cf45be9e17d89fc9'),
  },
});
