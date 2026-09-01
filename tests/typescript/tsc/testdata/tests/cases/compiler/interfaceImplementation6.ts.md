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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              },
              "start": 23,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 31
          }
        ],
        "start": 13,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 43
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
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 57
          },
          "typeArguments": null,
          "start": 55,
          "end": 57
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
              },
              "start": 75,
              "end": 82
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 64,
            "end": 83
          }
        ],
        "start": 58,
        "end": 85
      },
      "abstract": false,
      "declare": false,
      "start": 35,
      "end": 85
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 95
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
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 109
          },
          "typeArguments": null,
          "start": 107,
          "end": 109
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
              },
              "start": 128,
              "end": 135
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 116,
            "end": 136
          }
        ],
        "start": 110,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 138
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
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
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "typeArguments": null,
          "start": 160,
          "end": 162
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 180
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 202,
                              "end": 208
                            },
                            "start": 200,
                            "end": 208
                          },
                          "start": 196,
                          "end": 208
                        },
                        "init": null,
                        "definite": false,
                        "start": 196,
                        "end": 208
                      }
                    ],
                    "declare": false,
                    "start": 192,
                    "end": 209
                  }
                ],
                "start": 183,
                "end": 215
              },
              "expression": false,
              "start": 180,
              "end": 215
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 215
          }
        ],
        "start": 163,
        "end": 217
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 217
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 237
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
                "name": "pt",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 254
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 258
                  },
                  "typeArguments": null,
                  "start": 256,
                  "end": 258
                },
                "start": 254,
                "end": 258
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 269,
                      "end": 270
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 263,
                    "end": 270
                  }
                ],
                "start": 261,
                "end": 272
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 244,
              "end": 273
            }
          ],
          "start": 238,
          "end": 275
        },
        "abstract": false,
        "declare": false,
        "start": 227,
        "end": 275
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 220,
      "end": 275
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 41,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 44,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 64,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 71,
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
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 93,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 96,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 116,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 146,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 149,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 169,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 220,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "pt",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  }
]
```
