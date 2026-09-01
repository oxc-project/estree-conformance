__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 26
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 26,
                "end": 34
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 35
            }
          ],
          "start": 19,
          "end": 37
        },
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 66,
                  "end": 72
                },
                "start": 64,
                "end": 72
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 73
            }
          ],
          "start": 57,
          "end": 75
        },
        "declare": false,
        "start": 45,
        "end": 75
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 38,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 106
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 111,
        "end": 113
      },
      "expression": false,
      "start": 94,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 94,
  "end": 113
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 94,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  }
]
```
