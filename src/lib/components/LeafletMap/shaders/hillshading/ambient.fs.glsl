precision highp float;

uniform sampler2D tElevation;
uniform sampler2D tNormal;
uniform sampler2D tSrc;
uniform vec3 direction;
uniform vec2 resolution;
uniform float pixelScale;
uniform float n;

void main() {
    vec2 ires = 1.0 / resolution;
    vec3 src = texture2D(tSrc, gl_FragCoord.xy * ires).rgb;
    vec4 e0 = texture2D(tElevation, gl_FragCoord.xy * ires);
    vec4 n0 = texture2D(tNormal, gl_FragCoord.xy * ires).rgba;
    vec3 sr3d = normalize(n0.rgb + direction);

    vec2 sr = normalize(sr3d.xy);
    vec2 p0 = gl_FragCoord.xy;
    vec2 p = floor(p0);
    vec2 stp = sign(sr);
    vec2 tMax = step(0.0, sr) * (1.0 - fract(p0)) + (1.0 - step(0.0, sr)) * fract(p0);
    tMax /= abs(sr);
    vec2 tDelta = 1.0 / abs(sr);
    for (int i = 0; i < 65536; i++) {
        if (tMax.x < tMax.y) {
            tMax.x += tDelta.x;
            p.x += stp.x;
        } else {
            tMax.y += tDelta.y;
            p.y += stp.y;
        }
        vec2 ptex = ires * (p + 0.5);
        if (ptex.x < 0.0 || ptex.x > 1.0 || ptex.y < 0.0 || ptex.y > 1.0) {
            gl_FragColor = vec4(src + vec3(1.0/n), n0.a);
            return;
        }
        vec4 e = texture2D(tElevation, ptex);
        float t = distance(p + 0.5, p0);
        float z = e0.r + t * pixelScale * sr3d.z;
        if (e.r > z) {
            gl_FragColor = vec4(src, n0.a);
            return;
        }
    }
    gl_FragColor = vec4(src + vec3(1.0/n), n0.a);
}
  