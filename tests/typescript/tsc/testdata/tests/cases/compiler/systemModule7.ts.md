__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
        },
        "body": {
          "type": "TSModuleBlock",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 68,
                    "end": 69
                  },
                  "definite": false,
                  "start": 64,
                  "end": 69
                }
              ],
              "declare": false,
              "start": 60,
              "end": 70
            }
          ],
          "start": 54,
          "end": 72
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 42,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 72
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 149,
                "end": 151
              },
              "declare": false,
              "start": 137,
              "end": 151
            }
          ],
          "start": 131,
          "end": 153
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 119,
        "end": 153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 153
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 119,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 137,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
