
from PIL import Image 
from color import *
import matplotlib.pyplot as plt
import os
import numpy as np
from io import BytesIO 


def getImage(img_path):
	# load colorizers
	colorizer_eccv16 = eccv16(pretrained=True).eval()
	colorizer_siggraph17 = siggraph17(pretrained=True).eval()
	# default size to process images is 256x256
	# grab L channel in both original ("orig") and resized ("rs") resolutions
	img = load_img(img_path)
	(tens_l_orig, tens_l_rs) = preprocess_img(img, HW=(256,256))

	# colorizer outputs 256x256 ab map
	# resize and concatenate to original L channel
	img_bw =postprocess_tens(tens_l_orig, torch.cat((0*tens_l_orig,0*tens_l_orig),dim=1))
	#out_img_eccv16 = postprocess_tens(tens_l_orig, colorizer_eccv16(tens_l_rs).cpu())
	out_img_siggraph17 = postprocess_tens(tens_l_orig, colorizer_siggraph17(tens_l_rs).cpu())
	#convert out_img_siggraph to png image
	new_img = Image.fromarray((out_img_siggraph17 * 255).astype(np.uint8)).convert('RGB')

	#convert new_image to bytes
	output = BytesIO()
	new_img.save(output, format='PNG')
	new_img = output.getvalue()

	base64Image =  base64.b64encode(new_img)
	convertedImage = base64Image.decode('utf-8')
	return convertedImage


