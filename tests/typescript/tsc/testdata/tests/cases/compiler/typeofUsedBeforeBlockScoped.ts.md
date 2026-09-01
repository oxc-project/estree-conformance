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
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeArguments": null,
            "start": 9,
            "end": 17
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "start": 27,
              "end": 30
            },
            "typeArguments": null,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeArguments": null,
            "start": 33,
            "end": 41
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "start": 51,
              "end": 54
            },
            "typeArguments": null,
            "start": 44,
            "end": 54
          }
        ],
        "start": 9,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
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
        "start": 62,
        "end": 63
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 81,
              "end": 82
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 83
          }
        ],
        "start": 64,
        "end": 85
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "W",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 92
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "start": 102,
          "end": 105
        },
        "typeArguments": null,
        "start": 95,
        "end": 105
      },
      "declare": false,
      "start": 86,
      "end": 106
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeArguments": null,
                "start": 115,
                "end": 123
              },
              "start": 113,
              "end": 123
            },
            "start": 111,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 123
        }
      ],
      "declare": false,
      "start": 107,
      "end": 124
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 138,
                  "end": 140
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 135,
                "end": 140
              }
            ],
            "start": 133,
            "end": 142
          },
          "definite": false,
          "start": 129,
          "end": 142
        }
      ],
      "declare": false,
      "start": 125,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
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
    "value": "T",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 9,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 70,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 81,
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
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 95,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "let",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  }
]
```
