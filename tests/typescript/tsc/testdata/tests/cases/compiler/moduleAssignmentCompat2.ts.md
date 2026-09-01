__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 36
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 36
          }
        ],
        "start": 12,
        "end": 38
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 72,
                "end": 75
              },
              "abstract": false,
              "declare": false,
              "start": 64,
              "end": 75
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 75
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 95,
                "end": 98
              },
              "abstract": false,
              "declare": false,
              "start": 87,
              "end": 98
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 80,
            "end": 98
          }
        ],
        "start": 51,
        "end": 100
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 39,
      "end": 100
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "typeArguments": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 110
            },
            "start": 106,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 110
        }
      ],
      "declare": false,
      "start": 102,
      "end": 111
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "typeArguments": null,
                "start": 119,
                "end": 120
              },
              "start": 117,
              "end": 120
            },
            "start": 116,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 120
        }
      ],
      "declare": false,
      "start": 112,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 128
        },
        "start": 123,
        "end": 128
      },
      "directive": null,
      "start": 123,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 131
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 135
        },
        "start": 130,
        "end": 135
      },
      "directive": null,
      "start": 130,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 80,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  }
]
```
