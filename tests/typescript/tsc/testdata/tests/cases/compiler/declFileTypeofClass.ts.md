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
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
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
            "start": 14,
            "end": 32
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 37,
            "end": 62
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
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
            "start": 67,
            "end": 86
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y3",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
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
            "start": 91,
            "end": 109
          }
        ],
        "start": 8,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 0,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "typeArguments": null,
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "start": 117,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 121
        }
      ],
      "declare": false,
      "start": 113,
      "end": 122
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "definite": false,
          "start": 127,
          "end": 132
        }
      ],
      "declare": false,
      "start": 123,
      "end": 133
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 141,
                "end": 149
              },
              "start": 139,
              "end": 149
            },
            "start": 138,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 149
        }
      ],
      "declare": false,
      "start": 134,
      "end": 150
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericC",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 165
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
              "start": 166,
              "end": 167
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 166,
            "end": 167
          }
        ],
        "start": 165,
        "end": 168
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 169,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 151,
      "end": 172
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
            "name": "genericX",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 185
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericC",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 196
          },
          "definite": false,
          "start": 177,
          "end": 196
        }
      ],
      "declare": false,
      "start": 173,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 197
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
    "value": "c",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 91,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "genericC",
    "start": 157,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "genericX",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "genericC",
    "start": 188,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  }
]
```
