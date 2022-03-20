%problem 1
A= imread('peppers.bmp');
figure(1);
imshow(A);title('RGB Original Image');
pause();
%problem2
B= rgb2gray(A);
TB=transpose(B);
figure(2);
subplot(1,2,1), imshow(B);title('B');
subplot(1,2,2), imshow(TB);title('TB');
maxB=max(B(:));
minB=min(B(:));
meanB=mean(B(:));
medianB=median(B(:));
disp(maxB);
disp(minB);
disp(meanB);
disp(medianB);
pause();
%problem 3
C=im2double(B);
B=double(B);
figure(3);
imshow(C);
pause();
%problem4
d25 =C.^(0.25);
d125 =C.^(1.25);
figure(4);
subplot(1,2,1), imshow(d25);title('0.25');
subplot(1,2,2), imshow(d125);title('1.25');
disp("D1 is lighter and D2 is darker");
imwrite(d125,'Andrew_D2.jpg');
pause();
%problem5
[x,y,z]=size(B);
bw1=C;
bw1(bw1>=0.3)=1;
bw1(bw1<0.3)=0;
bw2= im2bw(C,0.3);
figure(5);
subplot(1,2,1), imshow(bw1);title('my method');
subplot(1,2,2), imshow(bw2);title('mathlab method');
if isequal(bw1,bw2)
    disp("“My method worked");
else
    disp("“My method did not work");
end
pause();
%problem6
close all;
clear;
pause();
%problem7
A= imread('peppers.bmp');
B= rgb2gray(A);
C= ReduceGrayScale(B);
subplot(1,2,1), imshow(B);title('org');
subplot(1,2,2), imshow(C);title('result');
pause();
close all;
clear;
%problem7 function:
function [output] = ReduceGrayScale(input)
%UNTITLED Summary of this function goes here
%   Detailed explanation goes here
output = input/4;
end