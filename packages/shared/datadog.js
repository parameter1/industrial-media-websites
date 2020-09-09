const tracer = require('dd-trace');

const DD_TRACE_ENABLED = process.env.DD_TRACE_ENABLED || false;
const DD_SERVICE = process.env.DD_SERVICE || '@industrial-media/websites';

process.env.DD_TRACE_ENABLED = DD_TRACE_ENABLED;
process.env.DD_SERVICE = DD_SERVICE;

tracer.init({ analytics: true });

module.exports = tracer;
