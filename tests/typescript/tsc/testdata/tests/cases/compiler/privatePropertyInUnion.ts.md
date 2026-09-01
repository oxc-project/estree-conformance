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
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 34,
            "end": 40
          },
          {
            "type": "TSObjectKeyword",
            "start": 43,
            "end": 49
          }
        ],
        "start": 34,
        "end": 49
      },
      "declare": false,
      "start": 22,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncableObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 72
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 90,
                "end": 97
              },
              "start": 88,
              "end": 97
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
            "start": 77,
            "end": 98
          }
        ],
        "start": 73,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 100
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncableRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 123
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
              "start": 124,
              "end": 125
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISyncableObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 149
              },
              "typeArguments": null,
              "start": 134,
              "end": 149
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 149
          }
        ],
        "start": 123,
        "end": 150
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 151,
        "end": 153
      },
      "declare": false,
      "start": 102,
      "end": 153
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISyncableObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 185,
              "end": 191
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 191
          }
        ],
        "start": 180,
        "end": 192
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyncableObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 215
          },
          "typeArguments": null,
          "start": 201,
          "end": 215
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 216,
        "end": 218
      },
      "declare": false,
      "start": 155,
      "end": 218
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__ValueDescriptorType",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 246
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
              "start": 247,
              "end": 248
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 257,
                  "end": 263
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 266,
                  "end": 272
                }
              ],
              "start": 257,
              "end": 272
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 247,
            "end": 272
          }
        ],
        "start": 246,
        "end": 273
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "typeArguments": null,
          "start": 276,
          "end": 277
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ISyncableObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 301
          },
          "typeArguments": null,
          "start": 286,
          "end": 301
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyncableRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 315
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "typeArguments": null,
                "start": 316,
                "end": 317
              }
            ],
            "start": 315,
            "end": 318
          },
          "start": 304,
          "end": 318
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "typeArguments": null,
          "start": 321,
          "end": 322
        },
        "start": 276,
        "end": 322
      },
      "declare": false,
      "start": 220,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 323
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
    "value": "Type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
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
    "value": "object",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "SyncableObject",
    "start": 58,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 102,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "SyncableRef",
    "start": 112,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 126,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "ISyncableObject",
    "start": 134,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 155,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "ISyncableObject",
    "start": 165,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 193,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "SyncableObject",
    "start": 201,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 220,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "__ValueDescriptorType",
    "start": 225,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
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
    "value": "|",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
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
    "value": "T",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 278,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "ISyncableObject",
    "start": 286,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "SyncableRef",
    "start": 304,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  }
]
```
