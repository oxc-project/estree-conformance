__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 23
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collision",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 33
          },
          "start": 18,
          "end": 33
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shapes",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 40
        },
        "start": 18,
        "end": 40
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2CircleShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 73
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 89
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 90,
                "end": 97
              },
              "abstract": false,
              "declare": false,
              "start": 54,
              "end": 97
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 47,
            "end": 97
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 122
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 136
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 131,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 131,
                  "end": 153
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2CircleShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 167
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 167
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 168,
                "end": 175
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 175
          }
        ],
        "start": 41,
        "end": 177
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 177
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box2D",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 201
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dynamics",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 210
        },
        "start": 196,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2ContactListener",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 247
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 261
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 271
                    },
                    "optional": false,
                    "computed": false,
                    "start": 256,
                    "end": 271
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 278
                  },
                  "optional": false,
                  "computed": false,
                  "start": 256,
                  "end": 278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 286
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 286
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 287,
                "end": 294
              },
              "abstract": false,
              "declare": false,
              "start": 224,
              "end": 294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 294
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2FixtureDef",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 324
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box2D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 338
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dynamics",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 347
                  },
                  "optional": false,
                  "computed": false,
                  "start": 333,
                  "end": 347
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2ContactListener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 365
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 366,
                "end": 373
              },
              "abstract": false,
              "declare": false,
              "start": 306,
              "end": 373
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 299,
            "end": 373
          }
        ],
        "start": 211,
        "end": 375
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 178,
      "end": 375
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 375
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "b2CircleShape",
    "start": 60,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 74,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "b2Shape",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "b2Shape",
    "start": 115,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "b2CircleShape",
    "start": 154,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 178,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 186,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Dynamics",
    "start": 202,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "b2ContactListener",
    "start": 230,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 248,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 262,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 272,
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
    "value": "b2Shape",
    "start": 279,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 299,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "b2FixtureDef",
    "start": 312,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 325,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Dynamics",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "b2ContactListener",
    "start": 348,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  }
]
```
