__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tgt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                },
                "start": 18,
                "end": 26
              },
              "start": 16,
              "end": 26
            },
            "start": 12,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
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
            "name": "src2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 60,
                    "end": 68
                  },
                  "start": 54,
                  "end": 68
                },
                "nameType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 79
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 80,
                        "end": 81
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "length",
                          "raw": "\"length\"",
                          "start": 83,
                          "end": 91
                        },
                        "start": 83,
                        "end": 91
                      }
                    ],
                    "start": 79,
                    "end": 92
                  },
                  "start": 72,
                  "end": 92
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    },
                    "start": 96,
                    "end": 104
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeArguments": null,
                    "start": 106,
                    "end": 107
                  },
                  "start": 95,
                  "end": 108
                },
                "optional": false,
                "readonly": null,
                "start": 46,
                "end": 110
              },
              "start": 44,
              "end": 110
            },
            "start": 40,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 110
        }
      ],
      "declare": true,
      "start": 28,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tgt2",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "src2",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 123
        },
        "start": 112,
        "end": 123
      },
      "directive": null,
      "start": 112,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "tgt2",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 28,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "src2",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "tgt2",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "src2",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  }
]
```
