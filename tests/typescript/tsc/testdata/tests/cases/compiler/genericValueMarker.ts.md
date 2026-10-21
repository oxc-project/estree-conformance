__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueMarker",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 34,
                  "end": 40
                },
                "start": 27,
                "end": 40
              },
              "start": 25,
              "end": 40
            },
            "start": 14,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueMarker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 72
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 76,
                    "end": 85
                  },
                  "start": 74,
                  "end": 85
                },
                "accessibility": null,
                "static": false,
                "start": 60,
                "end": 85
              }
            ],
            "start": 58,
            "end": 87
          },
          {
            "type": "TSNumberKeyword",
            "start": 90,
            "end": 96
          }
        ],
        "start": 58,
        "end": 96
      },
      "declare": false,
      "start": 42,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compare",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 122
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
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 128
          }
        ],
        "start": 122,
        "end": 129
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 142
                  },
                  "typeArguments": null,
                  "start": 137,
                  "end": 142
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnyValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 145,
                  "end": 153
                }
              ],
              "start": 137,
              "end": 153
            },
            "start": 135,
            "end": 153
          },
          "start": 130,
          "end": 153
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 156,
          "end": 160
        },
        "start": 154,
        "end": 160
      },
      "body": null,
      "expression": false,
      "start": 98,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "compare",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 169
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 184,
              "end": 185
            },
            "id": null,
            "generator": false,
            "start": 170,
            "end": 185
          }
        ],
        "optional": false,
        "start": 162,
        "end": 186
      },
      "directive": null,
      "start": 162,
      "end": 187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 187
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "valueMarker",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 27,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "AnyValue",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "valueMarker",
    "start": 61,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 76,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 106,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "compare",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "AnyValue",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "compare",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 181,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  }
]
```
