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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6,
                  "end": 14
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6,
                  "end": 14
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 6,
                "end": 14
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 19,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 41
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 41
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 34,
                    "end": 41
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 43
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 46,
                "end": 47
              },
              "definite": false,
              "start": 32,
              "end": 47
            }
          ],
          "declare": false,
          "start": 28,
          "end": 48
        }
      ],
      "start": 22,
      "end": 50
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "let",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  }
]
```
