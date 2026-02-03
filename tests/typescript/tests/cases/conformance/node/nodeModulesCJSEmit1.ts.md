__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 17,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 14,
          "end": 15
        },
        "start": 0,
        "end": 15
      },
      "directive": null,
      "start": 0,
      "end": 16
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 17
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "exports",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 7,
        "end": 12
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 25
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 28,
          "end": 30
        },
        "start": 14,
        "end": 30
      },
      "directive": null,
      "start": 14,
      "end": 31
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement",
      "start": 0,
      "end": 1
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 2
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": ";",
    "start": 0,
    "end": 1
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./2.cjs",
        "raw": "\"./2.cjs\"",
        "start": 16,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 47
          },
          "start": 42,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./3.cjs",
        "raw": "\"./3.cjs\"",
        "start": 53,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 80
        },
        "optional": false,
        "computed": false,
        "start": 73,
        "end": 80
      },
      "directive": null,
      "start": 73,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "three",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 87
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 91
        },
        "optional": false,
        "computed": false,
        "start": 82,
        "end": 91
      },
      "directive": null,
      "start": 82,
      "end": 92
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./2.cjs\"",
    "start": 16,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./3.cjs\"",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  }
]
```
