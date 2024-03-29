/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent';
import { GridImageProps } from '../components/GridImage';
import {
  GridSectionElementProps,
  GridSectionProps,
} from '../components/GridSection';
import { GridTwoColumnsProps } from '../components/GridTwoColumns';
import { SectionProps } from '../templates/App';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    //image: { data: { attributes: { url: srcimg = '' } = '' } = '' } = '',
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  const srcimg = section?.image?.data?.attributes?.url || '';

  return {
    component,
    title,
    text,
    srcimg,
    $background,
    $sectionid,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component,
    title,
    html,
    $background,
    $sectionid,
  };
};

export const mapTextGrid = (section = {} as any): GridSectionProps => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    $background,
    grid: grid.map((text: any): GridSectionElementProps => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
    $sectionid,
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    $background,
    $sectionid,
    grid: grid.map((imgs: any) => {
      const {
        images: { data = [] },
      } = imgs;

      const srcImg = data.map((img: any) => {
        const { attributes: { url = '' } = {} } = img;

        return url;
      });

      const altText = data.map((img: any) => {
        const { attributes: { alternativeText = '' } = {} } = img;

        return alternativeText;
      });

      return { srcImg, altText };
    }),
  };
};
