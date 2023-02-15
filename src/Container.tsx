import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AnyStringWithAutocomplete } from './helpers';

const propTypes = {
	/**
	 * Allow the Container to fill all of its available horizontal space.
	 * @type {(boolean|"sm"|"md"|"lg"|"xl"|"xxl")}
	 */
	fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export type ContainerProps = React.HTMLAttributes<HTMLElement> & {
	fluid?: boolean | AnyStringWithAutocomplete<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ fluid, className, ...props }, ref) => {
		const suffix = typeof fluid === 'string' ? fluid : 'fluid';

		return (
			<div
				ref={ref}
				{...props}
				className={clsx(
					className,
					fluid ? `container-${suffix}` : 'container',
				)}
			/>
		);
	},
);

Container.displayName = 'Container';
Container.propTypes = propTypes;

export default Container;
