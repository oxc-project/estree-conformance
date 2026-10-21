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
        "name": "ParserName",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "babel",
              "raw": "\"babel\"",
              "start": 18,
              "end": 25
            },
            "start": 18,
            "end": 25
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 33
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 42,
                      "end": 47
                    }
                  ],
                  "start": 33,
                  "end": 48
                },
                "start": 29,
                "end": 48
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
                      "name": "marker",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 59
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 62,
                        "end": 67
                      },
                      "start": 60,
                      "end": 67
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 53,
                    "end": 67
                  }
                ],
                "start": 51,
                "end": 69
              }
            ],
            "start": 29,
            "end": 69
          }
        ],
        "start": 18,
        "end": 70
      },
      "declare": false,
      "start": 0,
      "end": 71
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
            "name": "customParser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "start": 87,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 107
        }
      ],
      "declare": true,
      "start": 73,
      "end": 108
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
            "name": "parser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 133
                },
                "typeArguments": null,
                "start": 123,
                "end": 133
              },
              "start": 121,
              "end": 133
            },
            "start": 115,
            "end": 133
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "customParser",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 148
          },
          "definite": false,
          "start": 115,
          "end": 148
        }
      ],
      "declare": false,
      "start": 109,
      "end": 149
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
            "name": "svelteParser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 180
                },
                "typeArguments": null,
                "start": 170,
                "end": 180
              },
              "start": 168,
              "end": 180
            },
            "start": 156,
            "end": 180
          },
          "init": {
            "type": "Literal",
            "value": "svelte",
            "raw": "\"svelte\"",
            "start": 183,
            "end": 191
          },
          "definite": false,
          "start": 156,
          "end": 191
        }
      ],
      "declare": false,
      "start": 150,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
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
    "value": "ParserName",
    "start": 5,
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
    "value": "\"babel\"",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "marker",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 73,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "customParser",
    "start": 87,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "parser",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "ParserName",
    "start": 123,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "customParser",
    "start": 136,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "svelteParser",
    "start": 156,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "ParserName",
    "start": 170,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "\"svelte\"",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  }
]
```
