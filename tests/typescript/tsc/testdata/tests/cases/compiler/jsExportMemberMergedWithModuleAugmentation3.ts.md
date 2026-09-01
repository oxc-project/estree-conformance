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
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 16
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 19,
          "end": 20
        },
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 21
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 36
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 46
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "./y.js",
              "raw": "\"./y.js\"",
              "start": 47,
              "end": 55
            }
          ],
          "optional": false,
          "start": 39,
          "end": 56
        },
        "start": 22,
        "end": 56
      },
      "directive": null,
      "start": 22,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
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
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"./y.js\"",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 21
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 24,
            "end": 25
          },
          "start": 24,
          "end": 25
        },
        "declare": true,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  }
]
```
