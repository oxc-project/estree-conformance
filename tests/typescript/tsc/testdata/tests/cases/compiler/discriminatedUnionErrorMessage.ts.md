__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "sq",
                  "raw": "\"sq\"",
                  "start": 22,
                  "end": 26
                },
                "start": 22,
                "end": 26
              },
              "start": 20,
              "end": 26
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 27
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 40
          }
        ],
        "start": 14,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 57
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rt",
                  "raw": "\"rt\"",
                  "start": 68,
                  "end": 72
                },
                "start": 68,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 84
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 94
          }
        ],
        "start": 60,
        "end": 96
      },
      "declare": false,
      "start": 43,
      "end": 96
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cr",
                  "raw": "\"cr\"",
                  "start": 119,
                  "end": 123
                },
                "start": 119,
                "end": 123
              },
              "start": 117,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 139
          }
        ],
        "start": 111,
        "end": 141
      },
      "declare": false,
      "start": 97,
      "end": 141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 167
            },
            "typeArguments": null,
            "start": 161,
            "end": 167
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 183
            },
            "typeArguments": null,
            "start": 174,
            "end": 183
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "typeArguments": null,
            "start": 190,
            "end": 196
          }
        ],
        "start": 159,
        "end": 196
      },
      "declare": false,
      "start": 142,
      "end": 197
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shape",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 214
                },
                "typeArguments": null,
                "start": 209,
                "end": 214
              },
              "start": 207,
              "end": 214
            },
            "start": 202,
            "end": 214
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": "sq",
                  "raw": "\"sq\"",
                  "start": 229,
                  "end": 233
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 223,
                "end": 233
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 242,
                  "end": 244
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 239,
                "end": 244
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 253,
                  "end": 255
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 255
              }
            ],
            "start": 217,
            "end": 258
          },
          "definite": false,
          "start": 202,
          "end": 258
        }
      ],
      "declare": false,
      "start": 198,
      "end": 258
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 258
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"sq\"",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 48,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"rt\"",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 97,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "String",
    "value": "\"cr\"",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"sq\"",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  }
]
```
