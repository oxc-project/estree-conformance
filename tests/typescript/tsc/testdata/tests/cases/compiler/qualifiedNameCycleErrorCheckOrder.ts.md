__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "start": 186,
                  "end": 189
                },
                "typeArguments": null,
                "start": 186,
                "end": 189
              },
              "start": 184,
              "end": 189
            },
            "start": 183,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 189
        }
      ],
      "declare": true,
      "start": 169,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 211,
        "end": 213
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 191,
      "end": 213
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 213
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 191,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 199,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  }
]
```
