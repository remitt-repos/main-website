import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default class SectionHeader extends React.Component<{ title: any, slogan: any, isWhite: boolean }> {
    static defaultProps = { isWhite: false }

    render() {
        let { title, slogan, isWhite } = this.props;
        return (
            <Box sx={ { variant: 'sectionHeader' } }>
                <Text
                    as="p"
                    sx={ {
                        variant: 'sectionHeader.subTitle',
                        color: isWhite ? 'white' : 'primary',
                        opacity: isWhite ? 0.7 : 1,
                    } }
                >
                    { slogan }
                </Text>
                <Heading
                    as="h2"
                    sx={ {
                        variant: 'sectionHeader.title',
                        color: isWhite ? 'white' : 'heading',
                    } }
                >
                    { title }
                </Heading>
            </Box>
        );
    }
}
