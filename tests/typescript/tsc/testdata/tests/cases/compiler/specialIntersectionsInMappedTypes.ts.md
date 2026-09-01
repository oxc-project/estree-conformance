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
        "name": "Alignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 49,
                "end": 51
              }
            ],
            "start": 40,
            "end": 51
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "left",
              "raw": "\"left\"",
              "start": 55,
              "end": 61
            },
            "start": 55,
            "end": 61
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "center",
              "raw": "\"center\"",
              "start": 64,
              "end": 72
            },
            "start": 64,
            "end": 72
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "right",
              "raw": "\"right\"",
              "start": 75,
              "end": 82
            },
            "start": 75,
            "end": 82
          }
        ],
        "start": 39,
        "end": 82
      },
      "declare": false,
      "start": 22,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Alignments",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 99
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Alignment",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 118
              },
              "typeArguments": null,
              "start": 109,
              "end": 118
            },
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ],
          "start": 108,
          "end": 127
        },
        "start": 102,
        "end": 127
      },
      "declare": false,
      "start": 84,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alignments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 149
                },
                "typeArguments": null,
                "start": 139,
                "end": 149
              },
              "start": 137,
              "end": 149
            },
            "start": 136,
            "end": 149
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
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 162
                },
                "value": {
                  "type": "Literal",
                  "value": "align-left",
                  "raw": "\"align-left\"",
                  "start": 164,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 158,
                "end": 176
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "center",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 188
                },
                "value": {
                  "type": "Literal",
                  "value": "align-center",
                  "raw": "\"align-center\"",
                  "start": 190,
                  "end": 204
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 182,
                "end": 204
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 215
                },
                "value": {
                  "type": "Literal",
                  "value": "align-right",
                  "raw": "\"align-right\"",
                  "start": 217,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 210,
                "end": 230
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 241
                },
                "value": {
                  "type": "Literal",
                  "value": "align-other",
                  "raw": "\"align-other\"",
                  "start": 243,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 236,
                "end": 256
              }
            ],
            "start": 152,
            "end": 259
          },
          "definite": false,
          "start": 136,
          "end": 259
        }
      ],
      "declare": false,
      "start": 130,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 268
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 268
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 275
        },
        "optional": false,
        "computed": false,
        "start": 262,
        "end": 275
      },
      "directive": null,
      "start": 262,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 284
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 291
        },
        "optional": false,
        "computed": false,
        "start": 277,
        "end": 291
      },
      "directive": null,
      "start": 277,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 316
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Alignment",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"center\"",
    "start": 64,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Alignments",
    "start": 89,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Alignment",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Alignments",
    "start": 139,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"align-left\"",
    "start": 164,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "center",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "\"align-center\"",
    "start": 190,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"align-right\"",
    "start": 217,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"align-other\"",
    "start": 243,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  }
]
```
