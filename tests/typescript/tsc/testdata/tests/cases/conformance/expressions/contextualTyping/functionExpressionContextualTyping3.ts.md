__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 30
          }
        ],
        "start": 28,
        "end": 31
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "typeArguments": null,
                  "start": 39,
                  "end": 40
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 43,
                  "end": 49
                }
              ],
              "start": 39,
              "end": 49
            },
            "start": 37,
            "end": 49
          },
          "start": 32,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        },
        "start": 50,
        "end": 56
      },
      "body": null,
      "expression": false,
      "start": 10,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 59
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  },
                  "start": 62,
                  "end": 67
                },
                "start": 61,
                "end": 67
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 72,
              "end": 74
            },
            "id": null,
            "generator": false,
            "start": 60,
            "end": 74
          }
        ],
        "optional": false,
        "start": 58,
        "end": 75
      },
      "directive": null,
      "start": 58,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 10,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 18,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 64,
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
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  }
]
```
