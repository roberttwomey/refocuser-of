#include "ofMain.h"
#include "ofApp.h"
#ifdef TARGET_OPENGLES
#include "ofGLProgrammableRenderer.h"
#endif
//========================================================================
int main( ){

	ofSetLogLevel(OF_LOG_VERBOSE);
	// #ifdef TARGET_OPENGLES
    // ofSetCurrentRenderer(ofGLProgrammableRenderer::TYPE);
	// #endif

	// ofSetupOpenGL(600 / SCREEN_HEIGHT * SCREEN_WIDTH,600, OF_WINDOW);			// <-------- setup the GL context

	// this kicks off the running of my app
	// can be OF_WINDOW or OF_FULLSCREEN
	// pass in width and height too:

	ofGLFWWindowSettings settings;
	settings.setGLVersion(3,3);
	settings.setSize(600 / SCREEN_HEIGHT * SCREEN_WIDTH,600);
	ofCreateWindow(settings);

	// settings.resizable = false;

	ofRunApp( new ofApp());
}
