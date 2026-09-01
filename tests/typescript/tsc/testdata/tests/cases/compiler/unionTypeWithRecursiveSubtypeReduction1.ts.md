__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Module",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 40
                  },
                  "typeArguments": null,
                  "start": 35,
                  "end": 40
                },
                "start": 35,
                "end": 42
              },
              "start": 33,
              "end": 42
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
            "start": 19,
            "end": 43
          }
        ],
        "start": 13,
        "end": 45
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Namespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Class",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 91
                      },
                      "typeArguments": null,
                      "start": 86,
                      "end": 91
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 102
                      },
                      "typeArguments": null,
                      "start": 94,
                      "end": 102
                    }
                  ],
                  "start": 86,
                  "end": 102
                },
                "start": 85,
                "end": 105
              },
              "start": 83,
              "end": 105
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
            "start": 69,
            "end": 106
          }
        ],
        "start": 63,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
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
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 152
                },
                "typeArguments": null,
                "start": 143,
                "end": 152
              },
              "start": 141,
              "end": 152
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
            "start": 128,
            "end": 153
          }
        ],
        "start": 122,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Property",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 171
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
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 191
            },
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
                      "name": "Module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 193,
                    "end": 199
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 207
                  }
                ],
                "start": 193,
                "end": 207
              },
              "start": 191,
              "end": 207
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
            "start": 178,
            "end": 208
          }
        ],
        "start": 172,
        "end": 210
      },
      "abstract": false,
      "declare": false,
      "start": 157,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
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
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 224
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 224
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 235
                    },
                    "typeArguments": null,
                    "start": 227,
                    "end": 235
                  }
                ],
                "start": 219,
                "end": 235
              },
              "start": 217,
              "end": 235
            },
            "start": 216,
            "end": 235
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 235
        }
      ],
      "declare": false,
      "start": 212,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 238
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "parent",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
        },
        "optional": false,
        "computed": false,
        "start": 237,
        "end": 245
      },
      "directive": null,
      "start": 237,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Module",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 19,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 143,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Module",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 202,
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
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "Class",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  }
]
```
