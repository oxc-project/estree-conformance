__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 54,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 60
        }
      ],
      "declare": true,
      "start": 42,
      "end": 61
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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "start": 74,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 84
        }
      ],
      "declare": true,
      "start": 62,
      "end": 85
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
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 108,
                "end": 111
              },
              "start": 106,
              "end": 111
            },
            "start": 98,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 111
        }
      ],
      "declare": true,
      "start": 86,
      "end": 112
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 134
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 158
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 159,
              "end": 161
            },
            "declare": false,
            "start": 141,
            "end": 161
          }
        ],
        "start": 135,
        "end": 163
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 113,
      "end": 163
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Fragment",
                "start": 176,
                "end": 184
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 175,
              "end": 185
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Fragment",
                "start": 187,
                "end": 195
              },
              "start": 185,
              "end": 196
            },
            "start": 175,
            "end": 196
          },
          "definite": false,
          "start": 171,
          "end": 196
        }
      ],
      "declare": false,
      "start": 165,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 197
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 62,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
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
    "value": "declare",
    "start": 86,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 98,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 141,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176
  },
  {
    "type": "JSXIdentifier",
    "value": "Fragment",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 186,
    "end": 187
  },
  {
    "type": "JSXIdentifier",
    "value": "Fragment",
    "start": 187,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
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
