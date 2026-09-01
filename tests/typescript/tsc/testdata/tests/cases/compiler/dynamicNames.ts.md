__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c0",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "init": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 18,
              "end": 21
            },
            "definite": false,
            "start": 13,
            "end": 21
          }
        ],
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 38
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 41,
              "end": 42
            },
            "definite": false,
            "start": 36,
            "end": 42
          }
        ],
        "declare": false,
        "start": 30,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 23,
      "end": 43
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "s0",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 59
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 68
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 62,
              "end": 70
            },
            "definite": false,
            "start": 57,
            "end": 70
          }
        ],
        "declare": false,
        "start": 51,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 44,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 91
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 101
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 104,
                  "end": 110
                },
                "start": 102,
                "end": 110
              },
              "accessibility": null,
              "static": false,
              "start": 98,
              "end": 111
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 122,
                  "end": 128
                },
                "start": 120,
                "end": 128
              },
              "accessibility": null,
              "static": false,
              "start": 116,
              "end": 129
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 137
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 140,
                  "end": 147
                },
                "start": 138,
                "end": 147
              },
              "accessibility": null,
              "static": false,
              "start": 134,
              "end": 148
            }
          ],
          "start": 92,
          "end": 150
        },
        "declare": false,
        "start": 79,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 72,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 174
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 188
            },
            "typeArguments": null,
            "start": 186,
            "end": 188
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 198
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 201,
                  "end": 207
                },
                "start": 199,
                "end": 207
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 195,
              "end": 208
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 219,
                  "end": 225
                },
                "start": 217,
                "end": 225
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 213,
              "end": 226
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 234
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 237,
                  "end": 244
                },
                "start": 235,
                "end": 244
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 231,
              "end": 245
            }
          ],
          "start": 189,
          "end": 247
        },
        "abstract": false,
        "declare": true,
        "start": 158,
        "end": 247
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 151,
      "end": 247
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 282
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 283,
          "end": 286
        },
        "abstract": false,
        "declare": true,
        "start": 255,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 248,
      "end": 286
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T3",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 309
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 324,
                  "end": 330
                },
                "start": 322,
                "end": 330
              },
              "accessibility": null,
              "static": false,
              "start": 318,
              "end": 331
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 339
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 342,
                  "end": 348
                },
                "start": 340,
                "end": 348
              },
              "accessibility": null,
              "static": false,
              "start": 336,
              "end": 349
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 357
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 360,
                  "end": 367
                },
                "start": 358,
                "end": 367
              },
              "accessibility": null,
              "static": false,
              "start": 354,
              "end": 368
            }
          ],
          "start": 312,
          "end": 370
        },
        "declare": true,
        "start": 294,
        "end": 371
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 287,
      "end": 371
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 372
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 151,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 158,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 172,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 175,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 248,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 255,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 269,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 294,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 360,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "importKind": "value",
          "start": 9,
          "end": 11
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 15
          },
          "importKind": "value",
          "start": 13,
          "end": 15
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "importKind": "value",
          "start": 17,
          "end": 19
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T0",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 23
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T0",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 23
          },
          "importKind": "value",
          "start": 21,
          "end": 23
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 27
          },
          "importKind": "value",
          "start": 25,
          "end": 27
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 31
          },
          "importKind": "value",
          "start": 29,
          "end": 31
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 35
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 35
          },
          "importKind": "value",
          "start": 33,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./module",
        "raw": "\"./module\"",
        "start": 43,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "start": 62,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./module",
        "raw": "\"./module\"",
        "start": 74,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 120
                  },
                  "init": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 123,
                    "end": 126
                  },
                  "definite": false,
                  "start": 118,
                  "end": 126
                }
              ],
              "declare": false,
              "start": 112,
              "end": 127
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 127
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 147
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 150,
                    "end": 151
                  },
                  "definite": false,
                  "start": 145,
                  "end": 151
                }
              ],
              "declare": false,
              "start": 139,
              "end": 152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 132,
            "end": 152
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 174,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
                    },
                    "start": 170,
                    "end": 183
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 188
                  },
                  "definite": false,
                  "start": 170,
                  "end": 188
                }
              ],
              "declare": false,
              "start": 164,
              "end": 189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 157,
            "end": 189
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 214
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 230
                      },
                      "optional": false,
                      "computed": false,
                      "start": 226,
                      "end": 230
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 233,
                        "end": 239
                      },
                      "start": 231,
                      "end": 239
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 225,
                    "end": 240
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 251
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 254
                      },
                      "optional": false,
                      "computed": false,
                      "start": 250,
                      "end": 254
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 257,
                        "end": 263
                      },
                      "start": 255,
                      "end": 263
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 249,
                    "end": 264
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 278
                      },
                      "optional": false,
                      "computed": false,
                      "start": 274,
                      "end": 278
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 281,
                        "end": 288
                      },
                      "start": 279,
                      "end": 288
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 273,
                    "end": 289
                  }
                ],
                "start": 215,
                "end": 295
              },
              "declare": false,
              "start": 202,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 195,
            "end": 295
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 323
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 337
                  },
                  "typeArguments": null,
                  "start": 335,
                  "end": 337
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 349,
                      "end": 353
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 356,
                        "end": 362
                      },
                      "start": 354,
                      "end": 362
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 348,
                    "end": 363
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 377
                      },
                      "optional": false,
                      "computed": false,
                      "start": 373,
                      "end": 377
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 380,
                        "end": 386
                      },
                      "start": 378,
                      "end": 386
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 372,
                    "end": 387
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 397,
                      "end": 401
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 404,
                        "end": 411
                      },
                      "start": 402,
                      "end": 411
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 396,
                    "end": 412
                  }
                ],
                "start": 338,
                "end": 418
              },
              "abstract": false,
              "declare": true,
              "start": 307,
              "end": 418
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 300,
            "end": 418
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 446
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 457
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 458,
                "end": 465
              },
              "abstract": false,
              "declare": true,
              "start": 430,
              "end": 465
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 423,
            "end": 465
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 492
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 507
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 510
                      },
                      "optional": false,
                      "computed": false,
                      "start": 506,
                      "end": 510
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 513,
                        "end": 519
                      },
                      "start": 511,
                      "end": 519
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 505,
                    "end": 520
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 531
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 530,
                      "end": 534
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 537,
                        "end": 543
                      },
                      "start": 535,
                      "end": 543
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 529,
                    "end": 544
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 555
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 558
                      },
                      "optional": false,
                      "computed": false,
                      "start": 554,
                      "end": 558
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 561,
                        "end": 568
                      },
                      "start": 559,
                      "end": 568
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 553,
                    "end": 569
                  }
                ],
                "start": 495,
                "end": 575
              },
              "declare": true,
              "start": 477,
              "end": 576
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 470,
            "end": 576
          }
        ],
        "start": 99,
        "end": 578
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 87,
      "end": 578
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 595
            },
            "init": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 598,
              "end": 601
            },
            "definite": false,
            "start": 593,
            "end": 601
          }
        ],
        "declare": false,
        "start": 587,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 580,
      "end": 602
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 618
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 621,
              "end": 622
            },
            "definite": false,
            "start": 616,
            "end": 622
          }
        ],
        "declare": false,
        "start": 610,
        "end": 623
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 603,
      "end": 623
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 650
                  },
                  "typeArguments": null,
                  "start": 641,
                  "end": 650
                },
                "start": 639,
                "end": 650
              },
              "start": 637,
              "end": 650
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "s0",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 655
            },
            "definite": false,
            "start": 637,
            "end": 655
          }
        ],
        "declare": false,
        "start": 631,
        "end": 656
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 624,
      "end": 656
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 668,
        "end": 670
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 680
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 683,
                "end": 689
              },
              "start": 681,
              "end": 689
            },
            "accessibility": null,
            "static": false,
            "start": 677,
            "end": 690
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 698
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 701,
                "end": 707
              },
              "start": 699,
              "end": 707
            },
            "accessibility": null,
            "static": false,
            "start": 695,
            "end": 708
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 716
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 719,
                "end": 726
              },
              "start": 717,
              "end": 726
            },
            "accessibility": null,
            "static": false,
            "start": 713,
            "end": 727
          }
        ],
        "start": 671,
        "end": 729
      },
      "declare": false,
      "start": 658,
      "end": 729
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 744,
        "end": 746
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T8",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 760
          },
          "typeArguments": null,
          "start": 758,
          "end": 760
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 770
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 773,
                "end": 779
              },
              "start": 771,
              "end": 779
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 767,
            "end": 780
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 788
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 791,
                "end": 797
              },
              "start": 789,
              "end": 797
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 785,
            "end": 798
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 806
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 809,
                "end": 816
              },
              "start": 807,
              "end": 816
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 803,
            "end": 817
          }
        ],
        "start": 761,
        "end": 819
      },
      "abstract": false,
      "declare": true,
      "start": 730,
      "end": 819
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 834,
        "end": 837
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 848
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 849,
        "end": 852
      },
      "abstract": false,
      "declare": true,
      "start": 820,
      "end": 852
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 866,
        "end": 869
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 884,
                "end": 890
              },
              "start": 882,
              "end": 890
            },
            "accessibility": null,
            "static": false,
            "start": 878,
            "end": 891
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 899
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 902,
                "end": 908
              },
              "start": 900,
              "end": 908
            },
            "accessibility": null,
            "static": false,
            "start": 896,
            "end": 909
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 917
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 920,
                "end": 927
              },
              "start": 918,
              "end": 927
            },
            "accessibility": null,
            "static": false,
            "start": 914,
            "end": 928
          }
        ],
        "start": 872,
        "end": 930
      },
      "declare": true,
      "start": 853,
      "end": 931
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 943,
        "end": 946
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 956,
                "end": 962
              },
              "start": 954,
              "end": 962
            },
            "accessibility": null,
            "static": false,
            "start": 953,
            "end": 963
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 968,
              "end": 969
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 971,
                "end": 977
              },
              "start": 969,
              "end": 977
            },
            "accessibility": null,
            "static": false,
            "start": 968,
            "end": 978
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 986
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 989,
                "end": 996
              },
              "start": 987,
              "end": 996
            },
            "accessibility": null,
            "static": false,
            "start": 983,
            "end": 997
          }
        ],
        "start": 947,
        "end": 999
      },
      "declare": false,
      "start": 933,
      "end": 999
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1017
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1029,
            "end": 1031
          },
          "typeArguments": null,
          "start": 1029,
          "end": 1031
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1039
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1041,
                "end": 1047
              },
              "start": 1039,
              "end": 1047
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1038,
            "end": 1048
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1053,
              "end": 1054
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1056,
                "end": 1062
              },
              "start": 1054,
              "end": 1062
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1053,
            "end": 1063
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1071
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1074,
                "end": 1081
              },
              "start": 1072,
              "end": 1081
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1068,
            "end": 1082
          }
        ],
        "start": 1032,
        "end": 1084
      },
      "abstract": false,
      "declare": true,
      "start": 1000,
      "end": 1084
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1102
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1114
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1115,
        "end": 1118
      },
      "abstract": false,
      "declare": true,
      "start": 1085,
      "end": 1118
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1135
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1147,
                "end": 1153
              },
              "start": 1145,
              "end": 1153
            },
            "accessibility": null,
            "static": false,
            "start": 1144,
            "end": 1154
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1159,
              "end": 1160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1162,
                "end": 1168
              },
              "start": 1160,
              "end": 1168
            },
            "accessibility": null,
            "static": false,
            "start": 1159,
            "end": 1169
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1175,
              "end": 1177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1180,
                "end": 1187
              },
              "start": 1178,
              "end": 1187
            },
            "accessibility": null,
            "static": false,
            "start": 1174,
            "end": 1188
          }
        ],
        "start": 1138,
        "end": 1190
      },
      "declare": true,
      "start": 1119,
      "end": 1191
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1208
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1222,
              "end": 1223
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1225,
                "end": 1231
              },
              "start": 1223,
              "end": 1231
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1215,
            "end": 1232
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1244,
              "end": 1245
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1247,
                "end": 1253
              },
              "start": 1245,
              "end": 1253
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1237,
            "end": 1254
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1269
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1272,
                "end": 1279
              },
              "start": 1270,
              "end": 1279
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1259,
            "end": 1280
          }
        ],
        "start": 1209,
        "end": 1282
      },
      "abstract": false,
      "declare": true,
      "start": 1193,
      "end": 1282
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
            "name": "t0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1294
                },
                "typeArguments": null,
                "start": 1292,
                "end": 1294
              },
              "start": 1290,
              "end": 1294
            },
            "start": 1288,
            "end": 1294
          },
          "init": null,
          "definite": false,
          "start": 1288,
          "end": 1294
        }
      ],
      "declare": false,
      "start": 1284,
      "end": 1295
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1304,
                  "end": 1306
                },
                "typeArguments": null,
                "start": 1304,
                "end": 1306
              },
              "start": 1302,
              "end": 1306
            },
            "start": 1300,
            "end": 1306
          },
          "init": null,
          "definite": false,
          "start": 1300,
          "end": 1306
        }
      ],
      "declare": false,
      "start": 1296,
      "end": 1307
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1318
                },
                "typeArguments": null,
                "start": 1316,
                "end": 1318
              },
              "start": 1314,
              "end": 1318
            },
            "start": 1312,
            "end": 1318
          },
          "init": null,
          "definite": false,
          "start": 1312,
          "end": 1318
        }
      ],
      "declare": false,
      "start": 1308,
      "end": 1319
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "typeArguments": null,
                "start": 1328,
                "end": 1330
              },
              "start": 1326,
              "end": 1330
            },
            "start": 1324,
            "end": 1330
          },
          "init": null,
          "definite": false,
          "start": 1324,
          "end": 1330
        }
      ],
      "declare": false,
      "start": 1320,
      "end": 1331
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
            "name": "t0_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1342,
                    "end": 1343
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1346
                  },
                  "start": 1342,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1342,
                "end": 1346
              },
              "start": 1340,
              "end": 1346
            },
            "start": 1336,
            "end": 1346
          },
          "init": null,
          "definite": false,
          "start": 1336,
          "end": 1346
        }
      ],
      "declare": false,
      "start": 1332,
      "end": 1347
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
            "name": "t1_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1358,
                    "end": 1359
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1362
                  },
                  "start": 1358,
                  "end": 1362
                },
                "typeArguments": null,
                "start": 1358,
                "end": 1362
              },
              "start": 1356,
              "end": 1362
            },
            "start": 1352,
            "end": 1362
          },
          "init": null,
          "definite": false,
          "start": 1352,
          "end": 1362
        }
      ],
      "declare": false,
      "start": 1348,
      "end": 1363
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
            "name": "t2_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1378
                  },
                  "start": 1374,
                  "end": 1378
                },
                "typeArguments": null,
                "start": 1374,
                "end": 1378
              },
              "start": 1372,
              "end": 1378
            },
            "start": 1368,
            "end": 1378
          },
          "init": null,
          "definite": false,
          "start": 1368,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1364,
      "end": 1379
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
            "name": "t3_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1390,
                    "end": 1391
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1392,
                    "end": 1394
                  },
                  "start": 1390,
                  "end": 1394
                },
                "typeArguments": null,
                "start": 1390,
                "end": 1394
              },
              "start": 1388,
              "end": 1394
            },
            "start": 1384,
            "end": 1394
          },
          "init": null,
          "definite": false,
          "start": 1384,
          "end": 1394
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1395
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1404,
                    "end": 1405
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1406,
                    "end": 1408
                  },
                  "start": 1404,
                  "end": 1408
                },
                "typeArguments": null,
                "start": 1404,
                "end": 1408
              },
              "start": 1402,
              "end": 1408
            },
            "start": 1400,
            "end": 1408
          },
          "init": null,
          "definite": false,
          "start": 1400,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1396,
      "end": 1409
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1418,
                    "end": 1419
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1422
                  },
                  "start": 1418,
                  "end": 1422
                },
                "typeArguments": null,
                "start": 1418,
                "end": 1422
              },
              "start": 1416,
              "end": 1422
            },
            "start": 1414,
            "end": 1422
          },
          "init": null,
          "definite": false,
          "start": 1414,
          "end": 1422
        }
      ],
      "declare": false,
      "start": 1410,
      "end": 1423
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1432,
                    "end": 1433
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1436
                  },
                  "start": 1432,
                  "end": 1436
                },
                "typeArguments": null,
                "start": 1432,
                "end": 1436
              },
              "start": 1430,
              "end": 1436
            },
            "start": 1428,
            "end": 1436
          },
          "init": null,
          "definite": false,
          "start": 1428,
          "end": 1436
        }
      ],
      "declare": false,
      "start": 1424,
      "end": 1437
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1446,
                    "end": 1447
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1448,
                    "end": 1450
                  },
                  "start": 1446,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1446,
                "end": 1450
              },
              "start": 1444,
              "end": 1450
            },
            "start": 1442,
            "end": 1450
          },
          "init": null,
          "definite": false,
          "start": 1442,
          "end": 1450
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1451
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1460,
                  "end": 1462
                },
                "typeArguments": null,
                "start": 1460,
                "end": 1462
              },
              "start": 1458,
              "end": 1462
            },
            "start": 1456,
            "end": 1462
          },
          "init": null,
          "definite": false,
          "start": 1456,
          "end": 1462
        }
      ],
      "declare": false,
      "start": 1452,
      "end": 1463
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
            "name": "t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1474
                },
                "typeArguments": null,
                "start": 1472,
                "end": 1474
              },
              "start": 1470,
              "end": 1474
            },
            "start": 1468,
            "end": 1474
          },
          "init": null,
          "definite": false,
          "start": 1468,
          "end": 1474
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1475
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
            "name": "t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1485,
                  "end": 1488
                },
                "typeArguments": null,
                "start": 1485,
                "end": 1488
              },
              "start": 1483,
              "end": 1488
            },
            "start": 1480,
            "end": 1488
          },
          "init": null,
          "definite": false,
          "start": 1480,
          "end": 1488
        }
      ],
      "declare": false,
      "start": 1476,
      "end": 1489
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
            "name": "t11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1499,
                  "end": 1502
                },
                "typeArguments": null,
                "start": 1499,
                "end": 1502
              },
              "start": 1497,
              "end": 1502
            },
            "start": 1494,
            "end": 1502
          },
          "init": null,
          "definite": false,
          "start": 1494,
          "end": 1502
        }
      ],
      "declare": false,
      "start": 1490,
      "end": 1503
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
            "name": "t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1516
                },
                "typeArguments": null,
                "start": 1513,
                "end": 1516
              },
              "start": 1511,
              "end": 1516
            },
            "start": 1508,
            "end": 1516
          },
          "init": null,
          "definite": false,
          "start": 1508,
          "end": 1516
        }
      ],
      "declare": false,
      "start": 1504,
      "end": 1517
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
            "name": "t13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1530
                },
                "typeArguments": null,
                "start": 1527,
                "end": 1530
              },
              "start": 1525,
              "end": 1530
            },
            "start": 1522,
            "end": 1530
          },
          "init": null,
          "definite": false,
          "start": 1522,
          "end": 1530
        }
      ],
      "declare": false,
      "start": 1518,
      "end": 1531
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
            "name": "t14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1544
                },
                "typeArguments": null,
                "start": 1541,
                "end": 1544
              },
              "start": 1539,
              "end": 1544
            },
            "start": 1536,
            "end": 1544
          },
          "init": null,
          "definite": false,
          "start": 1536,
          "end": 1544
        }
      ],
      "declare": false,
      "start": 1532,
      "end": 1545
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
            "name": "t15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1558
                },
                "typeArguments": null,
                "start": 1555,
                "end": 1558
              },
              "start": 1553,
              "end": 1558
            },
            "start": 1550,
            "end": 1558
          },
          "init": null,
          "definite": false,
          "start": 1550,
          "end": 1558
        }
      ],
      "declare": false,
      "start": 1546,
      "end": 1559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1580
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1585
            },
            "start": 1578,
            "end": 1585
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1587,
              "end": 1589
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1592,
              "end": 1594
            },
            "start": 1587,
            "end": 1594
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1598
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1601,
              "end": 1603
            },
            "start": 1596,
            "end": 1603
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1605,
              "end": 1607
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1610,
              "end": 1612
            },
            "start": 1605,
            "end": 1612
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1616
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1621
            },
            "start": 1614,
            "end": 1621
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1625
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1628,
              "end": 1630
            },
            "start": 1623,
            "end": 1630
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1632,
              "end": 1634
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1637,
              "end": 1639
            },
            "start": 1632,
            "end": 1639
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1643
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1648
            },
            "start": 1641,
            "end": 1648
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1650,
              "end": 1652
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1657
            },
            "start": 1650,
            "end": 1657
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1661
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1664,
              "end": 1666
            },
            "start": 1659,
            "end": 1666
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1670
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1675
            },
            "start": 1668,
            "end": 1675
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1679
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1682,
              "end": 1684
            },
            "start": 1677,
            "end": 1684
          }
        ],
        "start": 1578,
        "end": 1684
      },
      "directive": null,
      "start": 1578,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1688
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1693
            },
            "start": 1686,
            "end": 1693
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1695,
              "end": 1697
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1700,
              "end": 1702
            },
            "start": 1695,
            "end": 1702
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1704,
              "end": 1706
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1709,
              "end": 1711
            },
            "start": 1704,
            "end": 1711
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1713,
              "end": 1715
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1720
            },
            "start": 1713,
            "end": 1720
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1724
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1727,
              "end": 1729
            },
            "start": 1722,
            "end": 1729
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1731,
              "end": 1733
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1736,
              "end": 1738
            },
            "start": 1731,
            "end": 1738
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1740,
              "end": 1742
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1747
            },
            "start": 1740,
            "end": 1747
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1749,
              "end": 1751
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1754,
              "end": 1756
            },
            "start": 1749,
            "end": 1756
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1758,
              "end": 1760
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1763,
              "end": 1765
            },
            "start": 1758,
            "end": 1765
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1767,
              "end": 1769
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1772,
              "end": 1774
            },
            "start": 1767,
            "end": 1774
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1776,
              "end": 1778
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1783
            },
            "start": 1776,
            "end": 1783
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1785,
              "end": 1787
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1792
            },
            "start": 1785,
            "end": 1792
          }
        ],
        "start": 1686,
        "end": 1792
      },
      "directive": null,
      "start": 1686,
      "end": 1793
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1796
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1799,
              "end": 1802
            },
            "start": 1794,
            "end": 1802
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1806
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1809,
              "end": 1812
            },
            "start": 1804,
            "end": 1812
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1816
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1822
            },
            "start": 1814,
            "end": 1822
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1824,
              "end": 1826
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1832
            },
            "start": 1824,
            "end": 1832
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1834,
              "end": 1837
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1840,
              "end": 1842
            },
            "start": 1834,
            "end": 1842
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1844,
              "end": 1847
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1852
            },
            "start": 1844,
            "end": 1852
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1857
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1862
            },
            "start": 1854,
            "end": 1862
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1867
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1870,
              "end": 1872
            },
            "start": 1864,
            "end": 1872
          }
        ],
        "start": 1794,
        "end": 1872
      },
      "directive": null,
      "start": 1794,
      "end": 1873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1874,
          "end": 1876
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1879,
          "end": 1880
        },
        "start": 1874,
        "end": 1880
      },
      "directive": null,
      "start": 1874,
      "end": 1881
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1930,
              "end": 1932
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
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1944
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1947,
                    "end": 1948
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1941,
                  "end": 1948
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1955,
                    "end": 1957
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1960,
                    "end": 1963
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1954,
                  "end": 1963
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1972
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1975,
                    "end": 1979
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1969,
                  "end": 1979
                }
              ],
              "start": 1935,
              "end": 1981
            },
            "definite": false,
            "start": 1930,
            "end": 1981
          }
        ],
        "declare": false,
        "start": 1924,
        "end": 1982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1917,
      "end": 1982
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1_c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2027,
              "end": 2032
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2035,
                "end": 2037
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2040
              },
              "optional": false,
              "computed": true,
              "start": 2035,
              "end": 2041
            },
            "definite": false,
            "start": 2027,
            "end": 2041
          }
        ],
        "declare": false,
        "start": 2021,
        "end": 2042
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2014,
      "end": 2042
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1_c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2061
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2066
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null,
                "start": 2067,
                "end": 2069
              },
              "optional": false,
              "computed": true,
              "start": 2064,
              "end": 2070
            },
            "definite": false,
            "start": 2056,
            "end": 2070
          }
        ],
        "declare": false,
        "start": 2050,
        "end": 2071
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2043,
      "end": 2071
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2085,
              "end": 2090
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2093,
                "end": 2095
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2096,
                "end": 2098
              },
              "optional": false,
              "computed": true,
              "start": 2093,
              "end": 2099
            },
            "definite": false,
            "start": 2085,
            "end": 2099
          }
        ],
        "declare": false,
        "start": 2079,
        "end": 2100
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2072,
      "end": 2100
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2119,
                    "end": 2121
                  },
                  "typeArguments": null,
                  "start": 2119,
                  "end": 2121
                },
                "start": 2117,
                "end": 2121
              },
              "start": 2115,
              "end": 2121
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2124,
              "end": 2126
            },
            "definite": false,
            "start": 2115,
            "end": 2126
          }
        ],
        "declare": false,
        "start": 2109,
        "end": 2127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2102,
      "end": 2127
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
            "name": "rI",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2224,
                  "end": 2226
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2227,
                        "end": 2230
                      },
                      "start": 2227,
                      "end": 2230
                    }
                  ],
                  "start": 2226,
                  "end": 2231
                },
                "start": 2224,
                "end": 2231
              },
              "start": 2222,
              "end": 2231
            },
            "start": 2220,
            "end": 2231
          },
          "init": null,
          "definite": false,
          "start": 2220,
          "end": 2231
        }
      ],
      "declare": true,
      "start": 2206,
      "end": 2232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "rI",
          "optional": false,
          "typeAnnotation": null,
          "start": 2233,
          "end": 2235
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2236,
          "end": 2237
        },
        "optional": false,
        "computed": false,
        "start": 2233,
        "end": 2237
      },
      "directive": null,
      "start": 2233,
      "end": 2237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RI",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2250
      },
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
              "start": 2251,
              "end": 2252
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 2261,
                    "end": 2264
                  },
                  "start": 2261,
                  "end": 2264
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 2267,
                    "end": 2270
                  },
                  "start": 2267,
                  "end": 2270
                }
              ],
              "start": 2261,
              "end": 2270
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2251,
            "end": 2270
          }
        ],
        "start": 2250,
        "end": 2271
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2278,
              "end": 2279
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2281,
                  "end": 2282
                },
                "typeArguments": null,
                "start": 2281,
                "end": 2282
              },
              "start": 2279,
              "end": 2282
            },
            "accessibility": null,
            "static": false,
            "start": 2278,
            "end": 2283
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rI",
                "optional": false,
                "typeAnnotation": null,
                "start": 2289,
                "end": 2291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2292,
                "end": 2293
              },
              "optional": false,
              "computed": false,
              "start": 2289,
              "end": 2293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 2296,
                  "end": 2299
                },
                "start": 2296,
                "end": 2299
              },
              "start": 2294,
              "end": 2299
            },
            "accessibility": null,
            "static": false,
            "start": 2288,
            "end": 2300
          }
        ],
        "start": 2272,
        "end": 2302
      },
      "declare": false,
      "start": 2238,
      "end": 2302
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
            "name": "rC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2322,
                  "end": 2324
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2325,
                        "end": 2328
                      },
                      "start": 2325,
                      "end": 2328
                    }
                  ],
                  "start": 2324,
                  "end": 2329
                },
                "start": 2322,
                "end": 2329
              },
              "start": 2320,
              "end": 2329
            },
            "start": 2318,
            "end": 2329
          },
          "init": null,
          "definite": false,
          "start": 2318,
          "end": 2329
        }
      ],
      "declare": true,
      "start": 2304,
      "end": 2330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "rC",
          "optional": false,
          "typeAnnotation": null,
          "start": 2331,
          "end": 2333
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2334,
          "end": 2335
        },
        "optional": false,
        "computed": false,
        "start": 2331,
        "end": 2335
      },
      "directive": null,
      "start": 2331,
      "end": 2335
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2350,
        "end": 2352
      },
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
              "start": 2353,
              "end": 2354
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 2363,
                    "end": 2366
                  },
                  "start": 2363,
                  "end": 2366
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 2369,
                    "end": 2372
                  },
                  "start": 2369,
                  "end": 2372
                }
              ],
              "start": 2363,
              "end": 2372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2353,
            "end": 2372
          }
        ],
        "start": 2352,
        "end": 2373
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2380,
              "end": 2381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2383,
                  "end": 2384
                },
                "typeArguments": null,
                "start": 2383,
                "end": 2384
              },
              "start": 2381,
              "end": 2384
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2380,
            "end": 2385
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rC",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2393
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2394,
                "end": 2395
              },
              "optional": false,
              "computed": false,
              "start": 2391,
              "end": 2395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 2398,
                  "end": 2401
                },
                "start": 2398,
                "end": 2401
              },
              "start": 2396,
              "end": 2401
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2390,
            "end": 2402
          }
        ],
        "start": 2374,
        "end": 2404
      },
      "abstract": false,
      "declare": true,
      "start": 2336,
      "end": 2404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2404
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 38,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"./module\"",
    "start": 43,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 69,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"./module\"",
    "start": 74,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 157,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 174,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 195,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 202,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 300,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 307,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 321,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 324,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 404,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 423,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 430,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 444,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 447,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 477,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 485,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 561,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 580,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 587,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 593,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 603,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 610,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 624,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 631,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 641,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 658,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 668,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 730,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 738,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 744,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 747,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 809,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 820,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 828,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 834,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 853,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 861,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 884,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 933,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 943,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 984,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 989,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1000,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1018,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1074,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1085,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1103,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1119,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1180,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1193,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1215,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1304,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "t0_1",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "t1_1",
    "start": 1352,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "t2_1",
    "start": 1368,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "t3_1",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1392,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1414,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 1456,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 1499,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1518,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 1527,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "t15",
    "start": 1550,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1578,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1592,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1601,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1646,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1650,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1673,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1682,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1700,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1709,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1713,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1718,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1722,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1727,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1736,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1745,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1758,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1763,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1767,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1781,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 1785,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1790,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1794,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1814,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "t15",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 1834,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 1844,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1850,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 1854,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1860,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "t15",
    "start": 1864,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1870,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1942,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1955,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1970,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1975,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2014,
    "end": 2020
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2021,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "o1_c4",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2050,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "o1_c5",
    "start": 2056,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 2064,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2067,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2079,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "o1_s2",
    "start": 2085,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 2093,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2096,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2102,
    "end": 2108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2109,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 2124,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2206,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2214,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 2220,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 2224,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2227,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 2233,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2238,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 2248,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2253,
    "end": 2260
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2267,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 2289,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2304,
    "end": 2311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2312,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 2318,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "RC",
    "start": 2322,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2325,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 2331,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2336,
    "end": 2343
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2344,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "RC",
    "start": 2350,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2355,
    "end": 2362
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 2391,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2398,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2403,
    "end": 2404
  }
]
```
