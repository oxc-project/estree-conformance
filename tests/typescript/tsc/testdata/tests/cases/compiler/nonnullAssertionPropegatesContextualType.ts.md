__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rect2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SVGRectElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 25
                },
                "typeArguments": null,
                "start": 11,
                "end": 25
              },
              "start": 9,
              "end": 25
            },
            "start": 4,
            "end": 25
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 36
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "querySelector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 50
                },
                "optional": false,
                "computed": false,
                "start": 28,
                "end": 50
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": ".svg-rectangle",
                  "raw": "'.svg-rectangle'",
                  "start": 51,
                  "end": 67
                }
              ],
              "optional": false,
              "start": 28,
              "end": 68
            },
            "start": 28,
            "end": 69
          },
          "definite": false,
          "start": 4,
          "end": 69
        }
      ],
      "declare": false,
      "start": 0,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "rect2",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "SVGRectElement",
    "start": 11,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 28,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "querySelector",
    "start": 37,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "'.svg-rectangle'",
    "start": 51,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  }
]
```
