__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 83
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 96,
                    "end": 100
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 103,
                      "end": 111
                    },
                    "start": 103,
                    "end": 111
                  }
                ],
                "start": 96,
                "end": 111
              },
              "start": 94,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 112
          }
        ],
        "start": 84,
        "end": 114
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
            },
            "typeArguments": null,
            "start": 128,
            "end": 133
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 146
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 149,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 138,
                "end": 156
              }
            ],
            "start": 136,
            "end": 158
          }
        ],
        "start": 128,
        "end": 158
      },
      "declare": false,
      "start": 115,
      "end": 159
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
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 187
                },
                "typeArguments": null,
                "start": 182,
                "end": 187
              },
              "start": 180,
              "end": 187
            },
            "start": 174,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 187
        }
      ],
      "declare": true,
      "start": 160,
      "end": 188
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
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 208
                },
                "typeArguments": null,
                "start": 203,
                "end": 208
              },
              "start": 201,
              "end": 208
            },
            "start": 195,
            "end": 208
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 222
                },
                "start": 213,
                "end": 222
              }
            ],
            "start": 211,
            "end": 224
          },
          "definite": false,
          "start": 195,
          "end": 224
        }
      ],
      "declare": false,
      "start": 189,
      "end": 225
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
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 250
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 259
            },
            "optional": false,
            "computed": false,
            "start": 244,
            "end": 259
          },
          "definite": false,
          "start": 233,
          "end": 259
        }
      ],
      "declare": false,
      "start": 227,
      "end": 260
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
            "name": "hasOwn",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 273
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 282
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 297
            },
            "optional": false,
            "computed": false,
            "start": 276,
            "end": 297
          },
          "definite": false,
          "start": 267,
          "end": 297
        }
      ],
      "declare": false,
      "start": 261,
      "end": 298
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 355,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 364
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Null",
    "value": "null",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 160,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "hasOwn",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 283,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  }
]
```
