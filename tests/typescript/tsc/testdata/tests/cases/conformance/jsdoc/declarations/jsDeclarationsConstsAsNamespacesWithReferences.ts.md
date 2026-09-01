__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "colors",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
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
                    "name": "royalBlue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 37
                  },
                  "value": {
                    "type": "Literal",
                    "value": "#6400e4",
                    "raw": "\"#6400e4\"",
                    "start": 39,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 28,
                  "end": 48
                }
              ],
              "start": 22,
              "end": 51
            },
            "definite": false,
            "start": 13,
            "end": 51
          }
        ],
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "brandColors",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 78
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
                    "name": "purple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 93
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "colors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 101
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "royalBlue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 111
                    },
                    "optional": false,
                    "computed": false,
                    "start": 95,
                    "end": 111
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 87,
                  "end": 111
                }
              ],
              "start": 81,
              "end": 114
            },
            "definite": false,
            "start": 67,
            "end": 114
          }
        ],
        "declare": false,
        "start": 61,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "royalBlue",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"#6400e4\"",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "brandColors",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "purple",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "royalBlue",
    "start": 102,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  }
]
```
