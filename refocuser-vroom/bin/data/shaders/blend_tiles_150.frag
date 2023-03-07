#version 150

// refocused textures
// uniform sampler2DRect refocustex[16]; // 16 is the max number of individual textures

uniform sampler2DRect rtex1;
uniform sampler2DRect rtex2;
uniform sampler2DRect rtex3;
uniform sampler2DRect rtex4;
uniform sampler2DRect rtex5;
uniform sampler2DRect rtex6;
uniform sampler2DRect rtex7;
uniform sampler2DRect rtex8;
uniform sampler2DRect rtex9;
uniform sampler2DRect rtex10;
uniform sampler2DRect rtex11;
uniform sampler2DRect rtex12;
uniform sampler2DRect rtex13;
uniform sampler2DRect rtex14;
uniform sampler2DRect rtex15;
uniform sampler2DRect rtex16;

uniform int numtextures;

out vec4 fragColor;

// #define PRECISION 0.000001

void main (void){
    vec4 color = vec4(0, 0, 0, 0);
    // int counter = 0;

    // TESTING:
    // vec4 thiscolor = texture(refocustex[1], gl_FragCoord.xy);
    // color += vec4(thiscolor.rgb, 0.0);

    // for(int i=0; i < numtextures; i++) {
    //     // color = vec4(1.0, 1.0, 0.0, 1.0); // uniformely yellow
    //     // colors are weighted according to number of visible subimages on per-tile basis
    //     vec4 thiscolor = texture(refocustex[i], gl_FragCoord.xy);
    //     color += vec4(thiscolor.rgb, 1.0);
    // }

    // color = texture(refocustex[0], gl_FragCoord.xy);

    // TEST WITHOUT ARRAY
    color += texture(rtex1, gl_FragCoord.xy);
    color += texture(rtex2, gl_FragCoord.xy);
    color += texture(rtex3, gl_FragCoord.xy);
    color += texture(rtex4, gl_FragCoord.xy);
    color += texture(rtex5, gl_FragCoord.xy);
    color += texture(rtex6, gl_FragCoord.xy);
    color += texture(rtex7, gl_FragCoord.xy);
    color += texture(rtex8, gl_FragCoord.xy);
    color += texture(rtex9, gl_FragCoord.xy);
    color += texture(rtex10, gl_FragCoord.xy);
    color += texture(rtex11, gl_FragCoord.xy);
    color += texture(rtex12, gl_FragCoord.xy);
    color += texture(rtex13, gl_FragCoord.xy);
    color += texture(rtex14, gl_FragCoord.xy);
    color += texture(rtex15, gl_FragCoord.xy);
    color += texture(rtex16, gl_FragCoord.xy);

    // color += texture(refocustex[0], gl_FragCoord.xy);
    // color += texture(refocustex[1], gl_FragCoord.xy);
    // color += texture(refocustex[2], gl_FragCoord.xy);
    // color += texture(refocustex[3], gl_FragCoord.xy);

    // multi-tile blend
    fragColor = vec4(color.rgb, 1.0);// / counter;
}




//     for(int i=0; i < numtextures; i++) {
//         vec4 thiscolor = texture(refocustex[i], gl_FragCoord.xy);
// //
//         // colors are weighted according to number of visible subimages on per-tile basis
//         color += vec4(thiscolor.rgb, 0.0);

//        if(thiscolor.a > 0.0) {
//            counter ++;
//            color += vec4(thiscolor.rgb, 1.0);
//        }

//
//        float mask = step(0.0, thiscolor.a - PRECISION);
//
//        counter += int(mask);
////        color += mask * vec4(thiscolor.rgb, 1.0);
//        color += thiscolor.a * vec4(thiscolor.rgb, 1.0);

//        color += thiscolor;//vec4(thiscolor.rgb, 1.0);
//        if(all(greaterThan(thiscolor, vec4(zero_ish)))) {
//            counter ++;
//            color += thiscolor;
//        }

        // no change in performance with the following
//        float nz = step(0.0, length(thiscolor));
//        counter += int(nz);
//        color += nz * thiscolor;

    // }
    // debugging
   // fragColor = vec4(vec3(float(counter) * 0.25), 1.0);
//    fragColor = vec4(color.aaa * 0.25, 1.0);
//    fragColor = vec4(vec3(float(counter)), 1.0);
